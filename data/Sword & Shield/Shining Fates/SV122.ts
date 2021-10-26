import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Éthernatos VMAX",
		en: "Eternatus VMAX",
		es: "Eternatus VMAX",
		it: "Eternatus VMAX",
		pt: "Eternatus VMAX",
		de: "Endynalos VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Éthernatos-V",
		en: "Eternatus V"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Zone Éternelle",
			en: "Eternal Zone",
			es: "Zona Eterna",
			it: "Area Eterna",
			pt: "Zona Eterna",
			de: "Endloszone"
		},

		effect: {
			fr: "Si tous vos Pokémon en jeu sont de type Darkness, vous pouvez avoir jusqu'à 8 Pokémon sur votre Banc et vous ne pouvez pas mettre de Pokémon non Darkness en jeu. (Si ce talent arrête de fonctionner, défaussez des Pokémon de votre Banc jusqu'à en avoir 5.)",
			en: "If all of your Pokémon in play are Darkness type, you can have up to 8 Pokémon on your Bench, and you can't put non-Darkness Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)",
			es: "Si todos tus Pokémon en juego son de tipo Darkness, puedes tener hasta 8 Pokémon en tu Banca y no puedes poner Pokémon no Darkness en juego. (Si esta habilidad deja de funcionar, descarta Pokémon de tu Banca hasta que tengas 5).",
			it: "Se tutti i tuoi Pokémon in gioco sono di tipo Darkness, puoi avere fino a otto Pokémon nella tua panchina e non puoi mettere in gioco Pokémon che non siano di tipo Darkness. Se questa abilità smette di funzionare, scarta i Pokémon dalla tua panchina fino ad averne cinque.",
			pt: "Se todos os seus Pokémon em jogo forem de tipo Darkness, você poderá ter até 8 Pokémon no seu Banco e não poderá colocar Pokémon que não sejam de tipo Darkness em jogo (se esta Habilidade parar de funcionar, descarte Pokémon até ter 5 no seu Banco).",
			de: "Wenn alle deine Pokémon im Spiel vom Typ Darkness sind, kannst du bis zu 8 Pokémon auf deiner Bank haben und Pokémon, die keine Darkness-Pokémon sind, nicht ins Spiel bringen. (Wenn diese Fähigkeit nicht mehr aktiv ist, lege so lange Pokémon von deiner Bank auf deinen Ablagestapel, bis du  5 hast.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Effroi Final",
			en: "Dread End",
			es: "Final Temido",
			it: "Finale Spaventoso",
			pt: "Medo Sem Saída",
			de: "Schrecken ohne Ende"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Darkness en jeu.",
			en: "This attack does 30 damage for each of your Darkness Pokémon in play.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Darkness en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon Darkness in gioco.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon Darkness em jogo.",
			de: "Diese Attacke fügt für jedes deiner Darkness-Pokémon im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX"
}

export default card
