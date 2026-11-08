import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'en-us': "Copperajah",
		'fr-fr': "Pachyradjah",
		'es-es': "Copperajah",
		'it-it': "Copperajah",
		'pt-br': "Copperajah",
		'de-de': "Patinaraja"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Massive Body",
			'fr-fr': "Corps Massif",
			'es-es': "Cuerpo Masivo",
			'it-it': "Corpo Massiccio",
			'pt-br': "Parrudo",
			'de-de': "Massiver Körper"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Stadio che ha in mano.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da mão dele.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Stadionkarten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Nasal Lariat",
			'fr-fr': "Lasso Nasal",
			'es-es': "Lazo Nasal",
			'it-it': "Nasolazo",
			'pt-br': "Laço Nasal",
			'de-de': "Nasenlasso"
		},

		effect: {
			'en-us': "You may do 100 more damage. If you do, during your next turn, this Pokémon can't attack.",
			'fr-fr': "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Puedes hacer 100 puntos de daño más. Si lo haces, durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Puoi infliggere 100 danni in più. Se lo fai, durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Você pode causar 100 pontos de dano a mais. Se fizer isto, durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Du kannst 100 Schadenspunkte mehr zufügen. Wenn du das machst, kann dieses Pokémon während deines nächsten Zuges nicht angreifen."
		},

		damage: "130+"
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
	retreat: 4,
	regulationMark: "H",


	illustrator: "kawayoo",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780938,
				tcgplayer: 560352
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780938,
				tcgplayer: 560352
			}
		},
	],
}

export default card
