import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	rarity: "Holo Rare",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "nagimiso",

	description: {
		en: "It has an electrical organ on its chest. While generating electricity, it fills its surroundings with what sounds like the strumming of a bass guitar."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Maximum Downer",
			fr: "Immobilisation Maximale",
			de: "Maximale Spaßbremse",
			es: "Bajonazo Total",
			pt: "Vacilo Total",
			it: "Calmante Massimo"
		},

		effect: {
			en: "If all your Pokémon in play are Fusion Strike Pokémon, your opponent's Pokémon VMAX in play get -30 HP.",
			fr: "Si tous vos Pokémon en jeu sont des Pokémon Poing de Fusion, les Pokémon-VMAX en jeu de votre adversaire perdent 30 PV.",
			de: "Wenn alle deine Pokémon im Spiel Fusionsangriff-Pokémon sind, erhalten die Pokémon-VMAX deines Gegners im Spiel -30 KP.",
			es: "Si todos tus Pokémon en juego son Pokémon Golpe Fusión, los Pokémon VMAX en juego de tu rival tienen 30 PS menos.",
			pt: "Se todos os seus Pokémon em jogo forem Pokémon Golpe Fusão, os Pokémon VMAX do seu oponente em jogo receberão 30 PS a menos.",
			it: "Se tutti i tuoi Pokémon in gioco sono Pokémon Colpo Fusione, i Pokémon-VMAX in gioco del tuo avversario hanno 30 PS in meno."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			de: "Kopf-Blitz",
			es: "Rayo de Cabeza",
			pt: "Raio de Cabeça",
			it: "Zuccalampo"
		},

		damage: 90
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582500
	}
}

export default card
