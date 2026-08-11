import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Igglybuff",
		'fr-fr': "Toudoudou",
		'es-es': "Igglybuff",
		'it-it': "Igglybuff",
		'pt-br': "Igglybuff",
		'de-de': "Fluffeluff"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		174,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sleepy Voice",
				'fr-fr': "Voix Endormie",
				'es-es': "Voz Adormilada",
				'it-it': "Voce Assonnata",
				'pt-br': "Voz de Ninar",
				'de-de': "Schläfrige Stimme"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If you use this Ability, your turn ends.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si vous utilisez ce talent, votre tour se termine.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si usas esta habilidad, tu turno termina.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se usi questa abilità, il tuo turno finisce.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	description: {
		'en-us': "It's always practicing its singing because it wants to improve. Even when it's asleep, it keeps singing in its dreams!",
	},

	thirdParty: {
		cardmarket: 408464,
		tcgplayer: 201290
	}
}

export default card
