# frozen_string_literal: true

source "https://rubygems.org"

gemspec

# Ruby 3.4 no longer ships BigDecimal as a default gem, while Liquid still
# requires it during Jekyll builds.
gem "bigdecimal"

# Jekyll resolves named time zones through TZInfo on Windows.
gem "tzinfo"
gem "tzinfo-data"
