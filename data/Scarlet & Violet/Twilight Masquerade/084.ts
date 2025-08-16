import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [981],
	set: Set,

	name: {
		en: "Farigiraf",
		fr: "Farigiraf",
		es: "Farigiraf",
		it: "Farigiraf",
		pt: "Farigiraf",
		de: "Farigiraf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "One-derful Rumble",
			fr: "Tous Pour 1",
			es: "Retumbar de los Unos",
			it: "Baruffa di Uno",
			pt: "Arranca-rabo Incom-um",
			de: "Einzigartige Randale"
		},

		effect: {
			en: "This attack does 40 damage for each of your Stage 1 Pokémon in play.",
			fr: "Cette attaque inflige 40 dégâts pour chacun de vos Pokémon de Niveau 1 en jeu.",
			es: "Este ataque hace 40 puntos de daño por cada uno de tus Pokémon de Fase 1 en juego.",
			it: "Questo attacco infligge 40 danni per ogni tuo Pokémon di Fase 1 in gioco.",
			pt: "Este ataque causa 40 pontos de dano para cada um dos seus Pokémon Estágio 1 em jogo.",
			de: "Diese Attacke fügt für jedes deiner Phase-1-Pokémon im Spiel 40 Schadenspunkte zu."
		},

		damage: "40×"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Eerie Wave",
			fr: "Vague Étrange",
			es: "Onda Sobrecogedora",
			it: "Ondamistero",
			pt: "Onda Misteriosa",
			de: "Gespenstische Woge"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Dsuke"
}

export default card