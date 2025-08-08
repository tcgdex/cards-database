import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Maximum Downer",
			fr: "Immobilisation Maximale",
			es: "Bajonazo Total",
			it: "Calmante Massimo",
			pt: "Vacilo Total",
			de: "Maximale Spaßbremse"
		},

		effect: {
			en: "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP.",
			fr: "Si tous vos Pokémon en jeu sont des Pokémon Poing de Fusion, les Pokémon-VMAX en jeu de votre adversaire perdent 30 PV.",
			es: "Si todos tus Pokémon en juego son Pokémon Golpe Fusión, los Pokémon VMAX en juego de tu rival tienen 30 PS menos.",
			it: "Se tutti i tuoi Pokémon in gioco sono Pokémon Colpo Fusione, i Pokémon-VMAX in gioco del tuo avversario hanno 30 PS in meno.",
			pt: "Se todos os seus Pokémon em jogo forem Pokémon Golpe Fusão, os Pokémon VMAX do seu oponente em jogo receberão 30 PS a menos.",
			de: "Wenn alle deine Pokémon im Spiel Fusionsangriff-Pokémon sind, erhalten die Pokémon-VMAX deines Gegners im Spiel -30 KP."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			es: "Rayo de Cabeza",
			it: "Zuccalampo",
			pt: "Raio de Cabeça",
			de: "Kopf-Blitz"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card