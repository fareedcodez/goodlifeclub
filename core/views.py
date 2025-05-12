from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home(request):
    context = {
        'page_title': 'Home | Good Life Club',
        'active_page': 'home',
    }
    return render(request, 'home.html', context)

def about(request):
    context = {
        'page_title': 'About Us | Good Life Club',
        'active_page': 'about',
    }
    return render(request, 'about.html', context)

def services(request):
    services_list = [
        {
            'title': 'Sales & Marketing',
            'icon': 'fa-chart-line',
            'description': 'Expert sales strategies and marketing solutions to grow your business.'
        },
        {
            'title': 'Leadership Training',
            'icon': 'fa-users',
            'description': 'Develop leadership skills to inspire and guide your team to success.'
        },
        {
            'title': 'Techpreneurship',
            'icon': 'fa-laptop-code',
            'description': 'Navigate crypto, website development, tech issues, and digital transformation.'
        },
        {
            'title': 'Management & Planning',
            'icon': 'fa-tasks',
            'description': 'Strategic planning and management solutions for organizational excellence.'
        },
        {
            'title': 'Phone Loans & Accessories',
            'icon': 'fa-mobile-alt',
            'description': 'Financing options for phones and quality accessories for your devices.'
        },
        {
            'title': 'Network Marketing',
            'icon': 'fa-network-wired',
            'description': 'Partnership opportunities in network marketing to expand your reach.'
        }
    ]
    
    context = {
        'page_title': 'Services | Good Life Club',
        'active_page': 'services',
        'services': services_list
    }
    return render(request, 'services.html', context)

def contact(request):
    context = {
        'page_title': 'Contact Us | Good Life Club',
        'active_page': 'contact',
    }
    return render(request, 'contact.html', context)