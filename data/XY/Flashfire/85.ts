import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		pt: "Lopunny",
		de: "Schlapor"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		428,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Big Jump",
				fr: "Grand Saut",
				es: "Gran Salto",
				it: "Gransalto",
				pt: "Grande Pulo",
				de: "Großer Satz"
			},
			effect: {
				en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes devolver este Pokémon y todas las cartas unidas a él a tu mano.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi riprendere in mano questo Pokémon e tutte le carte a esso assegnate.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá devolver este Pokémon e todos os cards ligados a ele para sua mão.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand nehmen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sitdown Bounce",
				fr: "Rebond Ressort",
				es: "Bote Sentado",
				it: "Siedibalzo",
				pt: "Ricochete Arriante",
				de: "Plumpshüpfer"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon no puede atacar durante tu próximo turno.",
				it: "Lancia una moneta. Se esce croce, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Jogue uma moeda. Se sair coroa, este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Wirf 1 Münze. Bei \"Zahl\" kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
