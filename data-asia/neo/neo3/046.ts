import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Farfetch'd",
         ja: "Farfetch'd",
         fr: "Farfetch'd",
         de: "Farfetch'd",
         es: "Farfetch'd",
         it: "Farfetch'd",
         pt: "Farfetch'd",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [83],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Leek Jab",
            ja: "ネギのジャブ",
            fr: "Jab de poireau",
            de: "Lauchjab",
            es: "Jab de puerro",
            it: "Porto di porro",
            pt: "Leek Jab",
          },
          effect: {
            en: "This attack can't be used during your next turn. (Benching Farfetch'd ends this effect.)",
            ja: "この攻撃は、次のターン中に使用することはできません。 （ベンチングファーフェッチはこの効果を終了します。）",
            fr: "Cette attaque ne peut pas être utilisée pendant votre prochain tour. (Le banc farfetch'd termine cet effet.)",
            de: "Dieser Angriff kann in Ihrer nächsten Kurve nicht verwendet werden. (BENCHING FARFETCH'D UNTERSCHAFT diesen Effekt.)",
            es: "Este ataque no se puede usar durante su próximo turno. (Benching Farfetch'd termina este efecto).",
            it: "Questo attacco non può essere usato durante il tuo prossimo turno. (Benching Farfetch'd termina questo effetto.)",
            pt: "Este ataque não pode ser usado durante o seu próximo turno. (Banhando Farfetch'd termina esse efeito.)",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
