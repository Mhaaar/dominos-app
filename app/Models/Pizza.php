<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;


class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
        'chef',
        'last_updated',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute()
    {
        return $this->user->name;
    }

    public function getLastUpdatedAttribute(){
        return $this->updated_at->diffForHumans();
    }
}
