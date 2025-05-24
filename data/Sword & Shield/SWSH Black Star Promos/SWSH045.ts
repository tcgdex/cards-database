import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eternatus VMAX",
		fr: "Éthernatos VMAX",
		es: "Eternatus VMAX",
		it: "Eternatus VMAX",
		pt: "Eternatus VMAX",
		de: "Endynalos VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eternatus V",
		fr: "Éthernatos-V",
		de: "Endynalos-V",
		es: "Eternatus V",
		pt: "Eternatus V",
		it: "Eternatus-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Eternal Zone",
			fr: "Zone Éternelle",
			es: "Zona Eterna",
			it: "Area Eterna",
			pt: "Zona Eterna",
			de: "Endloszone"
		},

		effect: {
			en: "If all of your Pokémon in play are {D} type, you can have up to 8 Pokémon on your Bench, and you can't put non-{D} Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)",
			fr: "Si tous vos Pokémon en jeu sont de type {D}, vous pouvez avoir jusqu'à 8 Pokémon sur votre Banc et vous ne pouvez pas mettre de Pokémon non {D} en jeu. (Si ce talent arrête de fonctionner, défaussez des Pokémon de votre Banc jusqu'à en avoir 5.)",
			es: "Si todos tus Pokémon en juego son de tipo {D}, puedes tener hasta 8 Pokémon en tu Banca y no puedes poner Pokémon no {D} en juego. (Si esta habilidad deja de funcionar, descarta Pokémon de tu Banca hasta que tengas 5).",
			it: "Se tutti i tuoi Pokémon in gioco sono di tipo {D}, puoi avere fino a otto Pokémon nella tua panchina e non puoi mettere in gioco Pokémon che non siano di tipo {D}. Se questa abilità smette di funzionare, scarta i Pokémon dalla tua panchina fino ad averne cinque.",
			pt: "Se todos os seus Pokémon em jogo forem de tipo {D}, você poderá ter até 8 Pokémon no seu Banco e não poderá colocar Pokémon que não sejam de tipo {D} em jogo (se esta Habilidade parar de funcionar, descarte Pokémon até ter 5 no seu Banco).",
			de: "Wenn alle deine Pokémon im Spiel vom Typ {D} sind, kannst du bis zu 8 Pokémon auf deiner Bank haben und Pokémon, die keine {D}-Pokémon sind, nicht ins Spiel bringen. (Wenn diese Fähigkeit nicht mehr aktiv ist, lege so lange Pokémon von deiner Bank auf deinen Ablagestapel, bis du  5 hast.)"
		}
	}],

	attacks: [{
		name: {
			en: "Dread End",
			fr: "Effroi Final",
			es: "Final Temido",
			it: "Finale Spaventoso",
			pt: "Medo Sem Saída",
			de: "Schrecken ohne Ende"
		},

		effect: {
			en: "This attack does 30 damage for each of your {D} Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon {D} en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {D} en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon {D} in gioco.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon {D} em jogo.",
			de: "Diese Attacke fügt für jedes deiner {D}-Pokémon im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	stage: "VMAX",
	dexId: [890],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
