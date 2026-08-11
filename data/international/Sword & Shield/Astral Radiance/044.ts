import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [902],
	set: Set,

	name: {
		'en-us': "Hisuian Basculegion",
		'fr-fr': "Paragruel de Hisui",
		'es-es': "Basculegion de Hisui",
		'it-it': "Basculegion di Hisui",
		'pt-br': "Basculegion de Hisui",
		'de-de': "Hisui-Salmagnis"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Hisuian Basculin",
		'fr-fr': "Bargantua de Hisui",
		'es-es': "Basculin de Hisui",
		'it-it': "Basculin di Hisui",
		'pt-br': "Basculin de Hisui",
		'de-de': "Hisui-Barschuft"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Grudge Dive",
			'fr-fr': "Plongée Rancunière",
			'es-es': "Zambullida de Rencor",
			'it-it': "Immergirancore",
			'pt-br': "Mergulho Rancoroso",
			'de-de': "Grolltaucher"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Confuso.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: "30+"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Jet Headbutt",
			'fr-fr': "Bélier Volant",
			'es-es': "Turbocabezazo",
			'it-it': "Zuccata Jet",
			'pt-br': "Cabeçada a Jato",
			'de-de': "Flinke Kopfnuss"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Clads itself in the souls of comrades that perished before fulfilling their goals of journeying upstream. No other species throughout all Hisui's rivers is Basculegion's equal.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658583,
				tcgplayer: 272244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658583,
				tcgplayer: 272244
			}
		},
	],
}

export default card
