import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Delphox",
		fr: "Goupelin",
		es: "Delphox",
		it: "Delphox",
		pt: "Delphox",
		de: "Fennexis"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
		es: "Braixen",
		it: "Braixen",
		pt: "Braixen",
		de: "Rutena"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flare Parade",
			fr: "Parade Flamboyante",
			es: "Desfile de Antorchas",
			it: "Corteo Fiammeggiante",
			pt: "Desfile de Labaredas",
			de: "Flammenparade"
		},

		effect: {
			en: "This attack does 60 damage for each Serena card in your discard pile.",
			fr: "Cette attaque inflige 60 dégâts pour chaque carte Serena dans votre pile de défausse.",
			es: "Este ataque hace 60 puntos de daño por cada carta de Serena en tu pila de descartes.",
			it: "Questo attacco infligge 60 danni per ogni carta Serena nella tua pila degli scarti.",
			pt: "Este ataque causa 60 pontos de dano para cada carta Serena na sua pilha de descarte.",
			de: "Diese Attacke fügt für jede Serena-Karte in deinem Ablagestapel 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			es: "Comprimir Energía",
			it: "Sgretolenergia",
			pt: "Esmagamento de Energia",
			de: "Zermalmende Energie"
		},

		effect: {
			en: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 50 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			it: "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card