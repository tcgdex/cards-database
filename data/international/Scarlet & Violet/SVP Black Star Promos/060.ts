import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [681],
	set: Set,

	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Mysterious Shield",
			'fr-fr': "Bouclier Mystérieux",
			'es-es': "Escudo Misterioso",
			'it-it': "Scudo Misterioso",
			'pt-br': "Escudo Misterioso",
			'de-de': "Geheimnisvoller Schild"
		},

		effect: {
			'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex and Pokémon V.",
			'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-ex et des Pokémon-V de votre adversaire.",
			'es-es': "Se evita todo el daño infligido a este Pokémon por ataques de los Pokémon ex y Pokémon V de tu rival.",
			'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-ex e dei Pokémon-V del tuo avversario.",
			'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon ex e Pokémon V do seu oponente.",
			'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-ex und Pokémon-V deines Gegners zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Hard Bashing",
			'fr-fr': "Rossée Dure",
			'es-es': "Duro Vapuleo",
			'it-it': "Colpoduro",
			'pt-br': "Batida Forte",
			'de-de': "Harter Stoß"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Takeshi Nakamura",
	description: {
		'en-us': "Its potent spectral powers allow it to manipulate others. It once used its powers to force people and Pokémon to build a kingdom to its liking.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 739449,
				tcgplayer: 526610
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761134,
				tcgplayer: 548555
			},
		}
	],
}

export default card
