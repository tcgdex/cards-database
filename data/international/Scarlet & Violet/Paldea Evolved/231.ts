import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [908],
	set: Set,

	name: {
		'fr-fr': "Miascarade-ex",
		'en-us': "Meowscarada ex",
		'es-es': "Meowscarada ex",
		'it-it': "Meowscarada-ex",
		'pt-br': "Meowscarada ex",
		'de-de': "Maskagato-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Matourgeon",
		'en-us': "Floragato",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'pt-br': "Floragato",
		'de-de': "Feliospa"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Bouquet Magique",
			'en-us': "Bouquet Magic",
			'es-es': "Magia Floral",
			'it-it': "Bouquet Magico",
			'pt-br': "Buquê Mágico",
			'de-de': "Bouquetmagie"
		},

		effect: {
			'fr-fr': "Vous devez défausser une carte Énergie {G} de base de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			'en-us': "You must discard a Basic {G} Energy card from your hand in order to use this Ability. Once during your turn, you may put 3 damage counters on 1 of your opponent's Benched Pokémon.",
			'es-es': "Debes descartar 1 carta de Energía {G} Básica de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes poner 3 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			'it-it': "Devi scartare una carta Energia base {G} che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi mettere tre segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			'pt-br': "Você deve descartar uma carta de Energia {G} Básica da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá colocar 3 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			'de-de': "Du musst 1 Basis-{G}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 3 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Griffes Griffantes",
			'en-us': "Scratching Nails",
			'es-es': "Uñas Rasgadoras",
			'it-it': "Unghie Graffianti",
			'pt-br': "Unhas Arranhadoras",
			'de-de': "Kratzende Krallen"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715706,
				tcgplayer: 497636,
				cardtrader: 248883
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
