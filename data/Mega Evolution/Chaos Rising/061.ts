import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886453,
				tcgplayer: 693522
			}
		},
	],

	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		'es-mx': "Metagross",
		de: "Metagross",
		it: "Metagross",
		pt: "Metagross"
	},

	illustrator: "Bun Toujo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [376],
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		en: "Metang"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bounce Back",
			fr: "Retour à l'Envoyeur",
			es: "Recuperarse",
			'es-mx': "Ataque Repulsor",
			de: "Zurückprallen",
			it: "Rimbalzo Indietro",
			pt: "Ricochete de Retrocesso"
		},

		cost: ["Metal"],
		damage: 60,

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		}
	}, {
		name: {
			en: "Metallic Hammer",
			fr: "Marteau Métallique",
			es: "Martillo Metálico",
			'es-mx': "Martillo Metálico",
			de: "Metallhammer",
			it: "Martello Metallico",
			pt: "Martelo Metálico"
		},

		cost: ["Metal", "Metal", "Metal", "Colorless"],
		damage: "150+",

		effect: {
			en: "You may discard 3 {M} Energy from this Pokémon and have this attack do 150 more damage.",
			fr: "Vous pouvez défausser 3 Énergies {M} de ce Pokémon et infliger 150 dégâts supplémentaires avec cette attaque.",
			es: "Puedes descartar 3 Energías {M} de este Pokémon y hacer que este ataque haga 150 puntos de daño más.",
			'es-mx': "Puedes descartar 3 Energías {M} de este Pokémon y hacer que este ataque haga 150 puntos de daño más.",
			de: "Du kannst 3 {M}-Energien von diesem Pokémon auf deinen Ablagestapel legen und diese Attacke 150 Schadenspunkte mehr zufügen lassen.",
			it: "Puoi scartare tre Energie {M} da questo Pokémon e infliggere 150 danni in più con questo attacco.",
			pt: "Você pode descartar 3 Energias {M} deste Pokémon e fazer este ataque causar 150 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",
}

export default card