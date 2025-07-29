import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Igglybuff",
		fr: "Toudoudou",
		es: "Igglybuff",
		it: "Igglybuff",
		pt: "Igglybuff",
		de: "Fluffeluff"
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
				en: "Sleepy Voice",
				fr: "Voix Endormie",
				es: "Voz Adormilada",
				it: "Voce Assonnata",
				pt: "Voz de Ninar",
				de: "Schläfrige Stimme"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si vous utilisez ce talent, votre tour se termine.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si usas esta habilidad, tu turno termina.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se usi questa abilità, il tuo turno finisce.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido. Se você usar esta Habilidade, a sua vez de jogar acaba.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
			},
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 408464
	}
}

export default card
