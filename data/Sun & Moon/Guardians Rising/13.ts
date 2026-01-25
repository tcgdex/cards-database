import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shady Move",
				fr: "Déplacement Louche",
				es: "Movimiento Sombrío",
				it: "Ombramossa",
				pt: "Movimento Umbroso",
				de: "Zwielichtige Aktion"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts d'un Pokémon à un autre Pokémon.",
				es: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				it: "d",
				pt: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				de: "Once during your turn (before your attack), you may move 1 damage counter from 1 Pokémon to another Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
				fr: "Super Roussi",
				es: "Superquemadura",
				it: "Super Scottata",
				pt: "Superchamuscada",
				de: "Super-Versengung"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 297477,
		tcgplayer: 130759
	}
}

export default card
