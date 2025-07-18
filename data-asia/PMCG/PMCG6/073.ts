import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Snorlax",
         ja: "ロケットのスノーラックス",
         fr: "Snorlax de Rocket",
         de: "Rocket's Snorlax",
         es: "Rocket's Snorlax",
         it: "Snorlax di Rocket",
         pt: "Snorlax do foguete",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [143],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Restless Sleep",
            ja: "落ち着きのない睡眠",
            fr: "Sommeil agité",
            de: "Unruhiger Schlaf",
            es: "Sueño inquieto",
            it: "Sonno irrequieto",
            pt: "Sono inquieto",
          },
          effect: {
            en: "If your opponent's attack does damage to Rocket's Snorlax and Rocket's Snorlax is already Asleep <em>(even if it's Knocked Out)</em>, this power does 20 damage to the attacking Pokmon.",
            ja: "相手の攻撃がロケットのスノーラックスにダメージを与え、ロケットのスノーラックスがすでに眠っている場合（たとえノックアウトされていても）</em>、このパワーは攻撃ポクモンに20のダメージを与えます。",
            fr: "Si l'attaque de votre adversaire endommage le snorlax de Rocket et que Snorlax de Rocket est déjà endormie <em> (même si elle est éliminée) </em>, cette puissance fait 20 dégâts au Pokmon offensif.",
            de: "Wenn der Angriff Ihres Gegners Schaden an Rockets Snorlax und Rocket's Snorlax schläft bereits <em> (auch wenn er ausgeschaltet ist) </em> schläft, diese Kraft schadet 20 Schäden an den angreifenden Pokmon.",
            es: "Si el ataque de tu oponente da daño a Rocket's Snorlax y el Snorlax de Rocket ya está dormido <em> (incluso si ha noqueado) </em>, este poder hace 20 daños al Pokmon atacante.",
            it: "Se l'attacco del tuo avversario fa danni allo snorlax di Rocket e Snorlax di Rocket è già addormentato <em> (anche se viene eliminato) </em>, questo potere infligge 20 danni al Pokmon attaccante.",
            pt: "Se o ataque do seu oponente causar danos ao Snorlax do Rocket e ao Snorlax do Rocket já está dormindo <em> (mesmo que seja nocauteado) </em>, esse poder causa 20 de dano ao Pokmon atacante.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Collapse",
            ja: "崩壊",
            fr: "Effondrement",
            de: "Zusammenbruch",
            es: "Colapsar",
            it: "Crollo",
            pt: "Colapso",
          },
          effect: {
            en: "Rocket's Snorlax is now Asleep (after doing damage).",
            ja: "RocketのSnorlaxは現在眠っています（ダメージを受けた後）。",
            fr: "Le snorlax de Rocket est maintenant endormi (après avoir fait des dégâts).",
            de: "Rockets Snorlax schläft jetzt (nachdem er Schaden angerichtet hat).",
            es: "Rocket's Snorlax ahora está dormido (después de hacer daño).",
            it: "Snorlax di Rocket ora dorme (dopo aver fatto danni).",
            pt: "O Snorlax do Rocket está agora dormindo (depois de causar danos).",
          },
          damage: 20,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
