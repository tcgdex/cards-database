import { Card } from "../../../interfaces"
import Set from "../30th Classic Collection"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat G",
		fr: "Nostenfert G",
		de: "Iksbat G",
		es: "Crobat G",
		it: "Crobat G",
		pt: "Crobat G",
		'es-mx': "Crobat G"
	},

	illustrator: "Makoto Imai",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "SP",

	attacks: [{
		name: {
			en: "Toxic Fang",
			fr: "Croc toxik",
			de: "Giftiger Reißzahn",
			es: "Colmillo tóxico",
			it: "Velenodenti",
			pt: "Presa Tóxica",
			'es-mx': "Colmillo tóxico"
		},

		effect: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
			de: "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon.",
			es: "El Pokémon Defensor pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 sobre el Pokémon Defensor entre turno y turno.",
			it: "Il Pokémon Difensore è Avvelenato. Metti 2 segnalini danno anziché 1 sul Pokémon Avvelenato tra un turno e l'altro.",
			pt: "O Pokémon Defensor agora está Envenenado. Coloque 2 marcadores de dano em vez de 1 no Pokémon Defensor entre os turnos.",
			'es-mx': "El Pokémon Defensor ahora está Envenenado. Pon 2 contadores de daño en lugar de 1 sobre el Pokémon Defensor entre turno y turno."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907952,
				tcgplayer: 716191
			}
		}
	],
}

export default card