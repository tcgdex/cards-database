import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'fr-fr': "Tyranocif-ex",
		'en-us': "Tyranitar ex",
		'es-es': "Tyranitar ex",
		'it-it': "Tyranitar-ex",
		'pt-br': "Tyranitar ex",
		'de-de': "Despotar-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Ymphect",
		'en-us': "Pupitar",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Lance-Montagnes",
			'en-us': "Mountain Hurl",
			'es-es': "Lanzamiento de Montaña",
			'it-it': "Lanciamonte",
			'pt-br': "Arremesso Montanhoso",
			'de-de': "Bergschleuderer"
		},

		effect: {
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'en-us': "Discard the top 2 cards of your deck.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime due carte del tuo mazzo.",
			'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Saccage Électrique",
			'en-us': "Lightning Rampage",
			'es-es': "Furia Relámpago",
			'it-it': "Furia Fulminante",
			'pt-br': "Fúria Relâmpago",
			'de-de': "Blitzrandale"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 100 more damage.",
			'es-es': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 100 puntos de daño más.",
			'it-it': "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "150+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725291,
				tcgplayer: 509960,
				cardtrader: 255653
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
