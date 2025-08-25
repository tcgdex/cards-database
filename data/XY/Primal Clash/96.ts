import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		pt: "Excadrill",
		de: "Stalobor"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur",
		de: "Rotomurf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Drill Run",
				fr: "Tunnelier",
				es: "Taladradora",
				it: "Giravvita",
				pt: "Furação",
				de: "Schlagbohrer"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Straight Claw",
				fr: "Griffe Rectiligne",
				es: "Garra Recta",
				it: "Artiglio Dritto",
				pt: "Garra Direta",
				de: "Pfeilgerade Klaue"
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Puedes descartar 1 Energía unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				it: "Puoi scartare un'Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				pt: "Você pode descartar uma Energia ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				de: "Du kannst 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273627,
		tcgplayer: 95994
	}
}

export default card
