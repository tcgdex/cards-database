import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Vespiquen",
		fr: "Apireine",
		de: "Honweisel",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		'es-mx': "Vespiquen"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pierce",
			fr: "Transpercement",
			de: "Durchbohren",
			es: "Perforar",
			it: "Perforare",
			pt: "Perfurar",
			'es-mx': "Perforar"
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			en: "Clean Hit",
			fr: "Coup Net",
			de: "Sauberer Treffer",
			es: "Impacto Limpio",
			it: "Colpo Pulito",
			pt: "Golpe Certeiro",
			'es-mx': "Golpe Limpio"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 80 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más."
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727568,
				cardmarket: 918816
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727568,
				cardmarket: 918816
			}
		}
	],
}

export default card