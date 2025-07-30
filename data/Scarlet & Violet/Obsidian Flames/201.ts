import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Ampibidou",
		en: "Bellibolt",
		es: "Bellibolt",
		it: "Bellibolt",
		pt: "Bellibolt",
		de: "Wampitz"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Isolant",
			en: "Insulator",
			es: "Aislante",
			it: "Isolante",
			pt: "Isolante",
			de: "Isolator"
		},

		effect: {
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon {L} de votre adversaire.",
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's {L} Pokémon.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon {L} de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon {L} del tuo avversario.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon {L} do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von {L}-Pokémon deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Avantage Foudroyant",
			en: "Thunderous Edge",
			es: "Filo Atronador",
			it: "Lama Tonante",
			pt: "Gume Trovejante",
			de: "Donnerkante"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "KEIICHIRO ITO",

	thirdParty: {
		cardmarket: 725157
	}
}

export default card