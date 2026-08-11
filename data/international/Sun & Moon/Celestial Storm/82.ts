import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Palossand GX",
		'fr-fr': "Trépassable GX",
		'es-es': "Palossand GX",
		'it-it': "Palossand GX",
		'pt-br': "Palossand GX",
		'de-de': "Colossand GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		770,
	],

	hp: 210,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
	},

	stage: "Stage1",
	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Light",
				'fr-fr': "Lumière Étrange",
				'es-es': "Luz Lúgubre",
				'it-it': "Luci Inquietanti",
				'pt-br': "Luz Misteriosa",
				'de-de': "Gespenstisches Licht"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Absorb Life",
				'fr-fr': "Absorption",
				'es-es': "Absorber Vida",
				'it-it': "Spolpavita",
				'pt-br': "Drenagem de Vida",
				'de-de': "Lebensverkoster"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 100,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sandy Fear GX",
				'fr-fr': "Crainte Ensablée GX",
				'es-es': "Temor Arena GX",
				'it-it': "Terrore Siliceo-GX",
				'pt-br': "Medo Arenoso GX",
				'de-de': "Sandfurcht GX"
			},
			effect: {
				'en-us': "Look at the top 13 cards of your opponent’s deck and discard any number of Pokémon you find there. This attack does 60 damage for each card you discarded in this way. Your opponent shuffles the other cards back into their deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Regardez les 13 cartes du dessus du deck de votre adversaire et défaussez-en autant de Pokémon que vous voulez. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon. Votre adversaire mélange les autres cartes avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Mira las 13 primeras cartas de la baraja de tu rival y descarta cualquier cantidad de Pokémon que encuentres entre ellas. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera. Tu rival pone el resto de cartas de nuevo en su baraja y las baraja todas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Guarda le prime 13 carte del mazzo del tuo avversario e scarta un numero qualsiasi di Pokémon presenti tra esse. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo. Il tuo avversario rimischia le altre carte nel suo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Olhe as 13 primeiras cartas do baralho do seu oponente e descarte qualquer número de Pokémon que encontrar lá. Este ataque causa 60 pontos de dano para cada carta descartada desta forma. Seu oponente embaralha as demais cartas de volta no próprio baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Schau dir die obersten 13 Karten des Decks deines Gegners an und lege beliebig viele Pokémon, die du dort findest, auf seinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf seinen Ablagestapel gelegten Karten zu. Dein Gegner mischt die anderen Karten zurück in sein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 361327,
		tcgplayer: 170904
	}
}

export default card
