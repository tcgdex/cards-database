import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Serperior VSTAR",
		fr: "Majaspic VSTAR",
		es: "Serperior V-ASTRO",
		it: "Serperior V ASTRO",
		pt: "Serperior V-ASTRO",
		de: "Serpiroyal VSTAR"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],

	evolveFrom: {
		en: "Serperior V",
		fr: "Majaspic-V",
		es: "Serperior V",
		it: "Serperior-V",
		pt: "Serperior V",
		de: "Serpiroyal-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Regal Blender",
			fr: "Mixeur Majestueux",
			es: "Batidora Realeza",
			it: "Caos Regale",
			pt: "Mistura Real",
			de: "Majestätischer Mixer"
		},

		effect: {
			en: "You may move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Vous pouvez déplacer autant d'Énergies que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			es: "Puedes mover cualquier cantidad de Energías de tus Pokémon a tus otros Pokémon de la manera que desees.",
			it: "Puoi spostare un numero qualsiasi di Energie dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			pt: "Você pode mover qualquer quantidade de Energia dos seus Pokémon para outros Pokémon seus como desejar.",
			de: "Du kannst beliebig viele Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben."
		},

		damage: 190
	}, {
		cost: ["Grass"],

		name: {
			en: "Star Winder",
			fr: "Enroulement Star",
			es: "Astro Bobina",
			it: "Astro Avvolgente",
			pt: "Enroscada Astral",
			de: "Windender Stern"
		},

		effect: {
			en: "This attack does 60 damage for each Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à ce Pokémon. Échangez ce Pokémon contre l'un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata a questo Pokémon. Scambia questo Pokémon con uno della tua panchina. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia ligada a este Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 60 Schadenspunkte zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "60×"
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card