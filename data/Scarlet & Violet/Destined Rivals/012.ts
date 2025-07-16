import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Crustle",
		fr: "Crabaraque",
		de: "Castellith",
		it: "Crustle",
		es: "Crustle",
		pt: "Crustle",
		'es-mx': "Crustle"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Rock Inn",
			fr: "Mystère Lithicole",
			de: "Geheimnisvolles Steinhaus",
			it: "Pietracasa Misteriosa",
			es: "Casapiedra Misteriosa",
			pt: "Rocha Misteriosa",
			'es-mx': "Casapiedra Misteriosa"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de votre adversaire.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex deines Gegners zugefügt wird.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex del tuo avversario.",
			es: "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex de tu rival.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex do seu oponente.",
			'es-mx': "Se evita todo el daño infligido por ataques de los Pokémon ex de tu rival a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Superb Scissors",
			fr: "Superbes Ciseaux",
			de: "Süperbe Scheren",
			it: "Forbici Formidabili",
			es: "Tijeras Espléndidas",
			pt: "Tremendas Tesouras",
			'es-mx': "Tijeras Espléndidas"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
