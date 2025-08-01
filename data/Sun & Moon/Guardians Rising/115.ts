import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Drampa GX",
		fr: "Draïeul GX",
		es: "Drampa GX",
		it: "Drampa GX",
		pt: "Drampa GX",
		de: "Sen-Long GX"
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
				en: "Righteous Edge",
				fr: "Lame Vertueuse",
				es: "Tajo Justiciero",
				it: "Giustalama",
				pt: "Gume Honrado",
				de: "Edle Klinge"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				en: "Berserk",
				fr: "Dracolère",
				es: "Cólera",
				it: "Furore",
				pt: "Furioso",
				de: "Wutausbruch"
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 70 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 70 puntos de daño más.",
				it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 70 danni in più.",
				pt: "Se os seus Pokémon no Banco possuírem algum contador de dano neles, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Wheel GX",
				fr: "Grande Roue GX",
				es: "Gran Rueda GX",
				it: "Gran Carosello-GX",
				pt: "Roda Grande GX",
				de: "Riesenrad GX"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 10 cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 10 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca 10 carte. Non puoi usare più di un attacco GX a partita.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 10 cartas (você não pode usar mais de 1 ataque GX por partida).",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 10 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 297567
	}
}

export default card
