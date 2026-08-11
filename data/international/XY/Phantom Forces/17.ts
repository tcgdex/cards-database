import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'es-es': "Feraligatr",
		'it-it': "Feraligatr",
		'pt-br': "Feraligatr",
		'de-de': "Impergator"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
		'es-es': "Croconaw",
		'it-it': "Croconaw",
		'pt-br': "Croconaw",
		'de-de': "Tyracroc"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Whirlpool",
				'fr-fr': "Hyper Tourbillon",
				'es-es': "Hipertorbellino",
				'it-it': "Ipermulinello",
				'pt-br': "Hiper Redemoinho",
				'de-de': "Hyper Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Strike",
				'fr-fr': "Deuxième Coup",
				'es-es': "Segundo Golpe",
				'it-it': "Secondocolpo",
				'pt-br': "Segundo Golpe",
				'de-de': "Sekundärschlag"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 80 de danos adicionais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It usually moves slowly, but it goes at blinding speed when it attacks and bites prey.",
	},

	thirdParty: {
		cardmarket: 281820,
		tcgplayer: 94150
	}
}

export default card
