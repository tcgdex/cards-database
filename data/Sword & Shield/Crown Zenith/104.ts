import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon VMAX",
		fr: "Duralugon VMAX",
		es: "Duraludon VMAX",
		it: "Duraludon VMAX",
		pt: "Duraludon VMAX",
		de: "Duraludon VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	evolveFrom: {
		en: "Duraludon V",
		fr: "Duralugon-V",
		es: "Duraludon V",
		it: "Duraludon-V",
		pt: "Duraludon V",
		de: "Duraludon-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Skyscraper",
			fr: "Gratte-Ciel",
			es: "Rascacielos",
			it: "Grattacielo",
			pt: "Arranha-céu",
			de: "Wolkenkratzer"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have Special Energy attached.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon de votre adversaire auxquels de l'Énergie spéciale est attachée.",
			es: "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon de tu rival que tengan alguna Energía Especial unida a ellos.",
			it: "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon del tuo avversario che hanno Energie speciali assegnate.",
			pt: "Previna todo o dano causado a este Pokémon por ataques dos Pokémon do seu oponente que tenham Energia Especial ligada a eles.",
			de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die Spezial-Energie angelegt ist, zugefügt wird."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			en: "G-Max Pulverization",
			fr: "Pulvérisation G-Max",
			es: "Gigapulverización",
			it: "Gigapolverizzazione",
			pt: "Pulverização G-Max",
			de: "Giga-Pulverisierung"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "E",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card