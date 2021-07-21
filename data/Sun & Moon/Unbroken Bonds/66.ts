import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sound Veil",
				fr: "Voile Sonore",
				es: "Velo Sonido",
				it: "Suonovelo",
				pt: "Véu Sonoro",
				de: "Schallschleier"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all effects of your opponent’s attacks, including damage, done to this Pokémon until the end of your opponent’s next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à ce Pokémon jusqu’à la fin du prochain tour de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes evitar todos los efectos de los ataques de tu rival, incluido el daño, infligidos a este Pokémon hasta el final del próximo turno de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prevenire tutti gli effetti degli attacchi del tuo avversario, inclusi i danni, inflitti a questo Pokémon fino alla fine del prossimo turno del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode prevenir todos os efeitos dos ataques do seu oponente, incluindo dano, causados a este Pokémon até o final da próxima vez de jogar do seu oponente.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners alle Effekte von Attacken deines Gegners, einschließlich Schaden, die diesem Pokémon zugefügt werden, verhindern."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Severe Poison",
				fr: "Poison Violent",
				es: "Veneno Grave",
				it: "Maloveleno",
				pt: "Veneno Forte",
				de: "Pures Gift"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 4 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti quattro segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 4 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 4 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
