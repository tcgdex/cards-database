import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [678],
	set: Set,

	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
		'es-es': "Meowstic",
		'it-it': "Meowstic",
		'pt-br': "Meowstic",
		'de-de': "Psiaugon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Beckoning Tail",
			'fr-fr': "Queue Invitante",
			'es-es': "Cola Señuelo",
			'it-it': "Coda Invitante",
			'pt-br': "Cauda Fascinante",
			'de-de': "Wedelnder Schweif"
		},

		effect: {
			'en-us': "You must discard a Chill Teaser Toy card from your hand in order to use this Ability. Once during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Vous devez défausser une carte Jouet Plumeau de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez envoyer l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'es-es': "Debes descartar 1 carta de Plumero Señuelo de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Devi scartare una carta Bacchetta Gioco Rilassante che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi sostituire uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Você deve descartar uma carta Varinha Relaxante da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá mandar 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Du musst 1 Lockwedel-Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Pokémon von der Bank deines Gegners in die Aktive Position einwechseln."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794388,
				tcgplayer: 590001
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794388,
				tcgplayer: 590001
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",
	
}

export default card
