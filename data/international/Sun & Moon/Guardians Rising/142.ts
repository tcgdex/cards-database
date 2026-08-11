import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Drampa GX",
		'fr-fr': "Draïeul GX",
		'es-es': "Drampa GX",
		'it-it': "Drampa GX",
		'pt-br': "Drampa GX",
		'de-de': "Sen-Long GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		780,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Righteous Edge",
				'fr-fr': "Lame Vertueuse",
				'es-es': "Tajo Justiciero",
				'it-it': "Giustalama",
				'pt-br': "Gume Honrado",
				'de-de': "Edle Klinge"
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Berserk",
				'fr-fr': "Dracolère",
				'es-es': "Cólera",
				'it-it': "Furore",
				'pt-br': "Furioso",
				'de-de': "Wutausbruch"
			},
			effect: {
				'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 70 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 70 puntos de daño más.",
				'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se os seus Pokémon no Banco possuírem algum contador de dano neles, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Wheel GX",
				'fr-fr': "Grande Roue GX",
				'es-es': "Gran Rueda GX",
				'it-it': "Gran Carosello-GX",
				'pt-br': "Roda Grande GX",
				'de-de': "Riesenrad GX"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 10 cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 10 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca 10 carte. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 10 cartas (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 10 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297594,
		tcgplayer: 131034
	}
}

export default card
