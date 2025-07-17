import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Magby",
         ja: "マグビー",
         fr: "Mouchard",
         de: "Magby",
         es: "Magby",
         it: "Magby",
         pt: "Magby",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [240],
      hp: 30,
      types: ["Fire"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sputter",
            ja: "スパッタ",
            fr: "Bafouement",
            de: "Sputtern",
            es: "Chisporroteo",
            it: "Sputter",
            pt: "Sputter",
          },
          effect: {
            en: "All Pokemon Powers stop working until the end of your next turn.",
            ja: "すべてのポケモンパワーは、次のターンの終わりまで機能しなくなります。",
            fr: "Tous les pouvoirs de Pokémon cessent de fonctionner jusqu'à la fin de votre prochain tour.",
            de: "Alle Pokemon -Kräfte arbeiten bis zum Ende Ihrer nächsten Kurve nicht mehr.",
            es: "Todos los poderes de Pokémon dejan de funcionar hasta el final de su próximo turno.",
            it: "Tutti i Pokemon Powers smettono di funzionare fino alla fine del tuo prossimo turno.",
            pt: "Todos os poderes de Pokemon param de funcionar até o final do seu próximo turno.",
          },
          damage: 10,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
