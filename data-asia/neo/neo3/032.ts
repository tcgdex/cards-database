import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Unown B",
         ja: "b",
         fr: "Non-bas",
         de: "Unown b",
         es: "Sin own b",
         it: "Unown b",
         pt: "Unown b",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "BEAR [Bear]",
            ja: "bear [bear]",
            fr: "Ours [ours]",
            de: "Bär [Bär]",
            es: "Oso [oso]",
            it: "Orso [orso]",
            pt: "Urso [urso]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may move 1 damage counter from 1 of your Pokémon with Unown in its name to Unown [B]. This power can't be used if Unown [B] has 10 HP left. This power can be used even if Unown [B] is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前）</em> </em>、1つのポケモンから1つのダメージカウンターを、名前に由来していない[B]を動かすことができます[B]。 [B]が10 hpの残りの場合、この電力は使用できません。この力は、眠っていない場合でも、眠っていても混乱している、または麻痺している場合でも使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez déplacer 1 compteur de dégâts de 1 de votre Pokémon avec non-bas en son nom à unond [b]. Cette puissance ne peut pas être utilisée si non-bas [b] a 10 ch. Cette puissance peut être utilisée même si non-bas [b] est endormie, confuse ou paralysée.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie 1 Schadenschalter von 1 Ihrer Pokémon mit Unown in seinem Namen zu Unown [b] verschieben. Diese Kraft kann nicht verwendet werden, wenn Unown [b] 10 PS übrig hat. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [b] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mover 1 contador de daño de 1 de su Pokémon con Unlow en su nombre a Under [B]. Esta potencia no se puede usar si Unwn [B] tiene 10 HP restantes. Este poder se puede usar incluso si no se duerme [b] está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi spostare 1 contatore di danni da 1 dei tuoi Pokémon con Unown nel suo nome a Unown [B]. Questa potenza non può essere usata se Unwno [b] ha 10 CV rimasto. Questa potenza può essere usata anche se Unwn [b] è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você poderá mover 1 contador de danos de 1 do seu Pokémon com Unwnown em seu nome para Unown [B]. Esse poder não pode ser usado se o UNOWN [B] tiver 10 hp restantes. Esse poder pode ser usado mesmo que o UNOWN [B] esteja dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
