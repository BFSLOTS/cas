@extends('installer::layouts.install')

@section('content')
    <p>Please activate your product license. (<?php echo str_rot13('<n uers="uggcf://AhyyWhatyr.pbz">Ahyyrq Ol AhyyWhatyr.pbz</n>');?> )</p>
    <form class="ui form" method="POST" action="{{ route('install.process', ['step' => $step]) }}">
        @csrf
        <div class="form-group">
            <label>Purchase code</label>
            <input type="text" name="code" placeholder="Enter random value" class="form-control" value="{{ old('code', env(FP_CODE)) }}" required>
        </div>
        <div class="form-group">
            <label>License holder email</label>
            <input type="text" name="email" placeholder="Email" class="form-control" value="{{ old('email', env(FP_EMAIL)) }}" required>
        </div>
        <div class="mt-3">
            <button type="submit" class="btn btn-primary">Next</button>
        </div>
    </form>
@endsection
