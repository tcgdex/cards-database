import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
		es: "Litleo",
		it: "Litleo",
		pt: "Litleo",
		de: "Leufeo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Mane",
				fr: "Crinière Intimidante",
				es: "Melena Intimidatoria",
				it: "Criniera Minacciosa",
				pt: "Juba Intimidadora",
				de: "Schreckensmähne"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon de base de votre adversaire.",
				es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Básicos de tu rival.",
				it: "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Base del tuo avversario.",
				pt: "Previne todos os danos causados a este Pokémon pelos ataques dos Pokémon Básicos do seu oponente.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Angriffe von Basis-Pokémon deines Gegners zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scorching Fang",
				fr: "Croc Ardent",
				es: "Colmillo Abrasador",
				it: "Ustiodenti",
				pt: "Presa Ardente",
				de: "Sengender Reißzahn"
			},
			effect: {
				en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Puedes descartar 1 Energía Fire unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				it: "Puoi scartare un'Energia Fire assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				pt: "Você pode descartar uma Energia Fire ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				de: "Du kannst 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281503
	}
}

export default card
