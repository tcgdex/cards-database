import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Dustox",
		fr: "Papinox",
		es: "Dustox",
		'es-mx': "Dustox",
		de: "Pudox",
		it: "Dustox",
		pt: "Dustox"
	},

	illustrator: "kamonabe",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boisterous Wind",
			fr: "Vent Turbulent",
			es: "Viento Tempestuoso",
			'es-mx': "Viento Estruendoso",
			de: "Tosender Wind",
			it: "Vento Turbolento",
			pt: "Vento Turbulento"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Flip a coin. If heads, put an Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Gib bei Kopf deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, coloque uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Twilight Poison",
			fr: "Poison Nocturne",
			es: "Veneno Ocaso",
			'es-mx': "Veneno Crepuscular",
			de: "Dämmergift",
			it: "Veleno Crepuscolare",
			pt: "Veneno do Crepúsculo"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675827,
		cardmarket: 869626
	}
}

export default card