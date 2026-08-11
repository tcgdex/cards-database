import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [558],
	set: Set,

	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque",
		'de-de': "Castellith",
		'it-it': "Crustle",
		'es-es': "Crustle",
		'pt-br': "Crustle",
		'es-mx': "Crustle"
	},


	illustrator: "Takumi Wada",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'de-de': "Lithomith",
		'it-it': "Dwebble",
		'es-es': "Dwebble",
		'pt-br': "Dwebble",
		'es-mx': "Dwebble"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mysterious Rock Inn",
			'fr-fr': "Mystère Lithicole",
			'de-de': "Geheimnisvolles Steinhaus",
			'it-it': "Pietracasa Misteriosa",
			'es-es': "Casapiedra Misteriosa",
			'pt-br': "Rocha Misteriosa",
			'es-mx': "Casapiedra Misteriosa"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex de votre adversaire.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex deines Gegners zugefügt wird.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex del tuo avversario.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex de tu rival.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex do seu oponente.",
			'es-mx': "Se evita todo el daño infligido por ataques de los Pokémon ex de tu rival a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Superb Scissors",
			'fr-fr': "Superbes Ciseaux",
			'de-de': "Süperbe Scheren",
			'it-it': "Forbici Formidabili",
			'es-es': "Tijeras Espléndidas",
			'pt-br': "Tremendas Tesouras",
			'es-mx': "Tijeras Espléndidas"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'es-mx': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826060,
				tcgplayer: 632986
			}
		},
	],
}

export default card
