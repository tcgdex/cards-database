import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [681],
	set: Set,

	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Shield",
			fr: "Bouclier Mystérieux",
			es: "Escudo Misterioso",
			it: "Scudo Misterioso",
			pt: "Escudo Misterioso",
			de: "Geheimnisvoller Schild"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex and Pokémon V.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex et des Pokémon-V de votre adversaire.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex y Pokémon V de tu rival.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex e dei Pokémon-V del tuo avversario.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex e Pokémon V do seu oponente.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex und Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Hard Bashing",
			fr: "Rossée Dure",
			es: "Duro Vapuleo",
			it: "Colpoduro",
			pt: "Batida Forte",
			de: "Harter Stoß"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Takumi Wada",

	thirdParty: {
		cardmarket: 740672
	}
}

export default card