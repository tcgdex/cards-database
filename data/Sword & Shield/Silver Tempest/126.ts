import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [638],
	set: Set,

	name: {
		en: "Cobalion",
		fr: "Cobaltium",
		es: "Cobalion",
		it: "Cobalion",
		pt: "Cobalion",
		de: "Kobalium"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Justified Law",
			fr: "Jugement Justifié",
			es: "Ley Justiciera",
			it: "Legge della Giustizia",
			pt: "Lei Justificada",
			de: "Gesetz der Redlichkeit"
		},

		effect: {
			en: "Your Basic Pokémon's attacks do 30 more damage to your opponent's Active Darkness Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon de base infligent 30 dégâts supplémentaires au Pokémon Darkness Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Básicos hacen 30 puntos de daño más al Pokémon Darkness Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Base infliggono 30 danni in più al Pokémon attivo Darkness del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Básicos causam 30 pontos de dano a mais ao Pokémon Darkness Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Basis-Pokémon fügen dem Aktiven Darkness-Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Follow-Up",
			fr: "Suivi",
			es: "Seguimiento",
			it: "Proseguimento",
			pt: "Continuidade",
			de: "Vorlage"
		},

		effect: {
			en: "Choose up to 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a basic Energy card and attach it to that Pokémon. Then, shuffle your deck.",
			fr: "Choisissez jusqu'à 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			es: "Elige hasta 2 de tus Pokémon en Banca. Para cada uno de esos Pokémon, busca en tu baraja 1 carta de Energía Básica y únela a ese Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Scegli fino a due dei tuoi Pokémon in panchina. Per ognuno di essi, cerca nel tuo mazzo una carta Energia base e assegnala a quel Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Escolha até 2 dos seus Pokémon no Banco. Para cada um daqueles Pokémon, procure por 1 carta de Energia básica no seu baralho e ligue-a àquele Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Wähle bis zu 2 Pokémon auf deiner Bank. Durchsuche für jedes jener Pokémon dein Deck nach 1 Basis-Energiekarte und lege sie an jenes Pokémon an. Mische anschließend dein Deck."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card