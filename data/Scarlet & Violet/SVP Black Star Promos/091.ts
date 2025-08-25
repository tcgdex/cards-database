import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon",
		de: "Koraidon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Primordial Beatdown",
			fr: "Dérouillée Primitive",
			es: "Golpe Primitivo",
			it: "Batosta Primordiale",
			pt: "Abater Primordial",
			de: "Urzeitlicher Niederprügler"
		},

		effect: {
			en: "This attack does 30 damage for each of your Ancient Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Temps passé en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon del pasado en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon Tempo Passato in gioco.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon Ancestrais em jogo.",
			de: "Diese Attacke fügt für jedes deiner Pokémon aus der Vergangenheit im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Fire", "Fighting", "Colorless"],

		name: {
			en: "Shred",
			fr: "Déchiquetage",
			es: "Hacer Trizas",
			it: "Tritatutto",
			pt: "Triturar",
			de: "Zerfetzer"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Anesaki Dynamic"
}

export default card