import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Heat Rotom",
		fr: "Motisma Chaleur",
		de: "Hitze-Rotom",
		it: "Rotom Calore",
		es: "Rotom Calor",
		pt: "Rotom Calor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Singe",
			fr: "Roussi",
			de: "Versengung",
			it: "Scottata",
			es: "Quemadura",
			pt: "Chamuscada"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gadget Show",
			fr: "Démonstration de Gadgets",
			de: "Gadget-Show",
			it: "Mostra di Gadget",
			es: "Espectáculo de Utensilios",
			pt: "Show de Bugigangas"
		},

		effect: {
			en: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Outil Pokémon attaché à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Pokémon-Ausrüstung 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni carta Oggetto Pokémon assegnata ai tuoi Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Herramienta Pokémon unida a cada uno de tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Ferramenta Pokémon ligada a todos os seus Pokémon."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card