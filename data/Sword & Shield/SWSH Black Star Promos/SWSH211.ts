import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Nymphali",
		de: "Feelinara",
		es: "Sylveon",
		pt: "Sylveon",
		it: "Sylveon",
		en: "Sylveon"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Évoli",
		de: "Evoli",
		es: "Eevee",
		pt: "Eevee",
		it: "Eevee",
		en: "Eevee"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Mise au Coin Brusque",
			de: "Auszeittritt",
			es: "Patada Pausa",
			pt: "Chute e Castigo",
			it: "Calcio Castigo",
			en: "Time Out Kick"
		},

		effect: {
			fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben.",
			es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			pt: "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
			it: "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
			en: "You may put an Energy attached to your opponent's Active Pokémon into their hand."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Fouet Symphonique",
			de: "Symphoniepeitsche",
			es: "Sinfonía de Latigazos",
			pt: "Chicote Sinfônico",
			it: "Frustata Sinfonica",
			en: "Symphony Whip"
		},

		effect: {
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			de: "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			es: "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
			pt: "Se você jogou 1 carta de Apoiador da sua mão durante este turno, este ataque causará 70 pontos de dano a mais.",
			it: "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
			en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage."
		},

		damage: "70+"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "There's a Galarian fairy tale that describes a beautiful Sylveon vanquishing a dreadful dragon Pokémon."
	}
}

export default card