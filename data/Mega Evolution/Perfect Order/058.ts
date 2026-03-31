import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		de: "Durengard",
		it: "Aegislash",
		pt: "Aegislash"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		681
	],
	hp: 150,
	types: [
		"Metal"
	],
	stage: "Stage2",
	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		de: "Duokles",
		it: "Doublade",
		pt: "Doublade"
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				de: "Schlitzer",
				it: "Lacerazione",
				pt: "Talho"
			},
			damage: "80"
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Metal Slash",
				fr: "Tranche Métallique",
				es: "Tajo Metálico",
				de: "Metallschlitzer",
				it: "Lacerametallo",
				pt: "Talho de Metal"
			},
			damage: "230",
			effect: {
				en: "During your next turn, this Pokémon can't use attacks.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser d'attaques.",
				es: "Durante tu próximo turno, este Pokémon no puede usar ataques.",
				de: "Während deines nächsten Zuges kann dieses Pokémon keine Attacken einsetzen.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare attacchi.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá usar ataques."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Mitsuhiro Arita",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684381,
		cardmarket: 877474
	}
}

export default card
