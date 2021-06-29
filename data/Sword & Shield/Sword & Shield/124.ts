import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
		es: "Toxicroak",
		it: "Toxicroak",
		pt: "Toxicroak",
		de: "Toxiquak"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "More Poison",
				fr: "Poison Sans Fin",
				es: "Veneno Plus",
				it: "Più Veleno",
				pt: "Veneno a Mais",
				de: "Giftschub"
			},
			effect: {
				en: "Put 2 more damage counters on your opponent’s Poisoned Pokémon during Pokémon Checkup.",
				fr: "Pendant le Contrôle Pokémon, placez 2 marqueurs de dégâts supplémentaires sur les Pokémon Empoisonnés de votre adversaire.",
				es: "Pon 2 contadores de daño más en los Pokémon Envenenados de tu rival durante el Chequeo Pokémon.",
				it: "Metti altri due segnalini danno sui Pokémon avvelenati del tuo avversario durante il controllo Pokémon.",
				pt: "Coloque 2 contadores de dano a mais nos Pokémon Envenenados do seu oponente durante o Checape Pokémon.",
				de: "Lege beim Pokémon-Check 2 Schadensmarken mehr auf die vergifteten Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				fr: "Griffes Empoisonnées",
				es: "Garras Venenosas",
				it: "Velenartigli",
				pt: "Garras Venenosas",
				de: "Giftkrallen"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Envenenado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
