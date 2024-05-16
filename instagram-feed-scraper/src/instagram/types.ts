export interface InstagramPost {
    shortcode: string
    display_url: string
    display_resources: DisplayResource[]
    ai_agent_type: any
    biography: string
    bio_links: any[]
    fb_profile_biolink: any
    biography_with_entities: BiographyWithEntities
    blocked_by_viewer: boolean
    restricted_by_viewer: any
    country_block: boolean
    eimu_id: string
    external_url: any
    external_url_linkshimmed: any
    edge_followed_by: EdgeFollowedBy
    owner: {
        username: string;
    },
    edge_media_to_caption: {
        edges: {
            node: {
                text: string
            }
        }[]
    }
    fbid: string
    followed_by_viewer: boolean
    edge_follow: EdgeFollow
    follows_viewer: boolean
    full_name: string
    group_metadata: any
    has_ar_effects: boolean
    has_clips: boolean
    has_guides: boolean
    has_channel: boolean
    has_blocked_viewer: boolean
    highlight_reel_count: number
    has_onboarded_to_text_post_app: boolean
    has_requested_viewer: boolean
    hide_like_and_view_counts: boolean
    id: string
    is_business_account: boolean
    is_professional_account: boolean
    is_supervision_enabled: boolean
    is_guardian_of_viewer: boolean
    is_supervised_by_viewer: boolean
    is_supervised_user: boolean
    is_embeds_disabled: boolean
    is_joined_recently: boolean
    guardian_id: any
    business_address_json: any
    business_contact_method: string
    business_email: any
    business_phone_number: any
    business_category_name: any
    overall_category_name: any
    category_enum: any
    category_name: any
    is_private: boolean
    is_verified: boolean
    is_verified_by_mv4b: boolean
    is_regulated_c18: boolean
    edge_mutual_followed_by: EdgeMutualFollowedBy
    pinned_channels_list_count: number
    profile_pic_url: string
    profile_pic_url_hd: string
    requested_by_viewer: boolean
    should_show_category: boolean
    should_show_public_contacts: boolean
    show_account_transparency_details: boolean
    remove_message_entrypoint: boolean
    transparency_label: any
    transparency_product: any
    username: string
    connected_fb_page: any
    pronouns: any[]
    edge_related_profiles: EdgeRelatedProfiles
}
interface  DisplayResource {
    src: string
    config_width: number
    config_height: number

}

interface BiographyWithEntities {
    raw_text: string
    entities: any[]
}

interface EdgeFollowedBy {
    count: number
}

interface EdgeFollow {
    count: number
}

interface EdgeMutualFollowedBy {
    count: number
    edges: any[]
}

interface EdgeRelatedProfiles {
    edges: any[]
}
