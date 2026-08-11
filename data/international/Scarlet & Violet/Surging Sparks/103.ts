import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'es-es': "Donphan",
		'it-it': "Donphan",
		'pt-br': "Donphan",
		'de-de': "Donphan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Knock Flat",
			'fr-fr': "Terrasser",
			'es-es': "Noquear",
			'it-it': "Stendere",
			'pt-br': "Dar uma Sova",
			'de-de': "Plattklopfen"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Guarded Rolling",
			'fr-fr': "Roulade Prudente",
			'es-es': "Defensa Rodante",
			'it-it': "Rotolamento Difensivo",
			'pt-br': "Proteção Rolante",
			'de-de': "Schutzrolle"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Descarta 2 Energías de este Pokémon. Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Scarta due Energie da questo Pokémon. Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Descarte 2 Energias deste Pokémon. Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794423,
				tcgplayer: 589919
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794423,
				tcgplayer: 589919
			}
		},
	],

	illustrator: "GOSSAN",

}

export default card
