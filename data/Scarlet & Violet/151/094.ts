import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [94],
	set: Set,

	name: {
		fr: "Ectoplasma",
		en: "Gengar",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Esprit Frappeur",
			en: "Poltergeist",
			es: "Poltergeist",
			it: "Poltergeist",
			pt: "Poltergeist",
			de: "Poltergeist"
		},

		effect: {
			fr: "Votre adversaire montre sa main. Cette attaque inflige 50 dégâts pour chaque carte Dresseur que vous y trouvez.",
			en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 50 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 50 danni per ogni carta Allenatore presente tra quelle carte.",
			pt: "Seu oponente revela a mão dele. Este ataque causa 50 pontos de dano para cada carta de Treinador que encontrar lá.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Plongée Éthérée",
			en: "Hollow Dive",
			es: "Embestida Hueca",
			it: "Picchiata Vacua",
			pt: "Mergulho Oco",
			de: "Heimsuchendes Tauchen"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît.",
			en: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like.",
			es: "Pon 3 contadores de daño en los Pokémon en Banca de tu rival de la manera que desees.",
			it: "Metti tre segnalini danno sui Pokémon nella panchina del tuo avversario nel modo che preferisci.",
			pt: "Coloque 3 contadores de dano nos Pokémon no Banco do seu oponente como desejar.",
			de: "Lege 3 Schadensmarken beliebig auf die Pokémon auf der Bank deines Gegners."
		},

		damage: 110
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card