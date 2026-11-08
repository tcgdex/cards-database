import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'es-es': "Dustox",
		'es-mx': "Dustox",
		'de-de': "Pudox",
		'it-it': "Dustox",
		'pt-br': "Dustox"
	},

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'es-mx': "Cascoon",
		'de-de': "Panekon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
	},

	illustrator: "kamonabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [269],
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boisterous Wind",
			'fr-fr': "Vent Turbulent",
			'es-es': "Viento Tempestuoso",
			'es-mx': "Viento Estruendoso",
			'de-de': "Tosender Wind",
			'it-it': "Vento Turbolento",
			'pt-br': "Vento Turbulento"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Flip a coin. If heads, put an Energy attached to your opponent's Active Pokémon into their hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, ajoutez à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, pon 1 Energía unida al Pokémon Activo de tu rival en su mano.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Gib bei Kopf deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Lancia una moneta. Se esce testa, prendi un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungila alle carte che ha in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, coloque uma Energia ligada ao Pokémon Ativo do seu oponente na mão dele."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Twilight Poison",
			'fr-fr': "Poison Nocturne",
			'es-es': "Veneno Ocaso",
			'es-mx': "Veneno Crepuscular",
			'de-de': "Dämmergift",
			'it-it': "Veleno Crepuscolare",
			'pt-br': "Veneno do Crepúsculo"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido y Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "A nocturnal Pokémon. Drawn by streetlights, they messily eat the leaves of trees lining boulevards.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869626,
				tcgplayer: 675827
			}
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 870160,
				tcgplayer: 676864
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870159,
				tcgplayer: 677004
			}
		},
	],
}

export default card
