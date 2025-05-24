import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		en: "Espeon VMAX",
		fr: "Mentali VMAX",
		es: "Espeon VMAX",
		it: "Espeon VMAX",
		pt: "Espeon VMAX",
		de: "Psiana VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espeon V",
		fr: "Mentali-V",
		es: "Espeon V",
		it: "Espeon-V",
		pt: "Espeon V",
		de: "Psiana-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	abilities: [{
		type: "Ability",

		name: {
			en: "$$$ABILITY.TITLE.MISSING.TOKEN$$$",
			fr: "$$$ABILITY.TITLE.MISSING.TOKEN$$$",
			de: "$$$ABILITY.TITLE.MISSING.TOKEN$$$",
			es: "$$$ABILITY.TITLE.MISSING.TOKEN$$$",
			pt: "$$$ABILITY.TITLE.MISSING.TOKEN$$$",
			it: "$$$ABILITY.TITLE.MISSING.TOKEN$$$"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			fr: "Évitez tous les effets d'attaques infligés par les Pokémon de votre adversaire à tous vos Pokémon auxquels de l'Énergie est attachée. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			de: "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)",
			es: "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía unida a él. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			pt: "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a todos os seus Pokémon que tenham Energia ligada a eles (efeitos existentes não são removidos e dano não é um efeito).",
			it: "Previeni tutti gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Max Mindstorm",
			fr: "Psychomax",
			de: "Dyna-Kinese",
			es: "Maxionda",
			pt: "Tempestade Mental Max",
			it: "Dynapsiche"
		},

		damage: "60×",

		effect: {
			en: "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu.",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card