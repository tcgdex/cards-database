import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Simisear V",
		fr: "Flamoutan V",
		es: "Simisear V",
		it: "Simisear V",
		pt: "Simisear V",
		de: "Grillchita V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Bursting Power",
			fr: "Puissance Explosive",
			es: "Poder Explosivo",
			it: "Potere Ustionante",
			pt: "Poder Explosivo",
			de: "Auflodernde Macht"
		},

		effect: {
			en: "You may attach up to 2 basic Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie de base de votre main à vos Pokémon comme il vous plaît.",
			es: "Puedes unir hasta 2 cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Puoi assegnare ai tuoi Pokémon fino a due carte Energia base dalla tua mano nel modo che preferisci.",
			pt: "Você pode ligar até 2 cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
			de: "Du kannst bis zu 2 Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flare Juggling",
			fr: "Jonglage Enflammé",
			es: "Fuegos Malabares",
			it: "Giocoleria Fiammeggiante",
			pt: "Malabarismo de Chamas",
			de: "Flammen-Jongleur"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
