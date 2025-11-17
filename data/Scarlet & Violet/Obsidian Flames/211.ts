import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		fr: "Tyranocif-ex",
		en: "Tyranitar ex",
		es: "Tyranitar ex",
		it: "Tyranitar-ex",
		pt: "Tyranitar ex",
		de: "Despotar-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Lightning"],
	evolveFrom: {
		fr: "Ymphect",
		en: "Pupitar",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Lance-Montagnes",
			en: "Mountain Hurl",
			es: "Lanzamiento de Montaña",
			it: "Lanciamonte",
			pt: "Arremesso Montanhoso",
			de: "Bergschleuderer"
		},

		effect: {
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			en: "Discard the top 2 cards of your deck.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			pt: "Descarte as 2 cartas de cima do seu baralho.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Saccage Électrique",
			en: "Lightning Rampage",
			es: "Furia Relámpago",
			it: "Furia Fulminante",
			pt: "Fúria Relâmpago",
			de: "Blitzrandale"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If your Benched Pokémon have any damage counters on them, this attack does 100 more damage.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 100 puntos de daño más.",
			it: "Se i tuoi Pokémon in panchina hanno dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "150+"
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 725291
	}
}

export default card