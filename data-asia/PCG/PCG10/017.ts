import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar",
         ja: "Omastar",
         fr: "Omastar",
         de: "Omastar",
         es: "OmaStar",
         it: "Omastar",
         pt: "OMASTAR",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [139],
      hp: 110,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pull Down",
            ja: "引き下げます",
            fr: "Abattre",
            de: "Runterziehen",
            es: "Derribar",
            it: "Abbattere",
            pt: "Puxe para baixo",
          },
          effect: {
            en: "If your opponent has any Evolved Pokemon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
            ja: "相手が進化したポケモンをプレイしている場合は、それぞれから最高のステージ進化カードを削除し、それらのカードを手に戻します。",
            fr: "Si votre adversaire a un pokemon évolué en jeu, retirez la carte d'évolution de la scène la plus élevée de chacun d'eux et remettez ces cartes dans sa main.",
            de: "Wenn Ihr Gegner ein weiterentwickeltes Pokémon im Spiel hat, entfernen Sie die Evolutionskarte mit der höchsten Bühne von jedem von ihnen und legen Sie diese Karten wieder in die Hand.",
            es: "Si tu oponente tiene algún Pokémon evolucionado en juego, retire la carta de evolución del escenario más alta de cada uno de ellos y vuelva a colocar esas cartas en su mano.",
            it: "Se il tuo avversario ha un Pokemon evoluto in gioco, rimuovi la carta di evoluzione più alta da ciascuno di essi e rimetti quelle carte nella sua mano.",
            pt: "Se o seu oponente tiver algum Pokemon evoluído em jogo, remova a maior carta de evolução do palco de cada um deles e coloque essas cartas de volta na mão dele.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Hydrocannon",
            ja: "ハイドロキャノン",
            fr: "Canon hydro",
            de: "Hydro -Kanone",
            es: "Cañón hidroeléctrico",
            it: "Hydro Cannon",
            pt: "Canhão hidrelétrico",
          },
          effect: {
            en: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost.  You can't add more than 40 damage in this way.",
            ja: "30のダメージに加えて、Omastarに取り付けられた水エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。  この方法で40以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 20 dégâts supplémentaires pour chaque énergie d'eau attachée à Omastar, mais pas utilisé pour payer le coût énergétique de cette attaque.  Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 20 weitere Schäden für jede an Omastar verbundene Wasserergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs.  Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Hace 30 daños más 20 más de daño por cada energía de agua unida a OmaStar, pero no se usa para pagar el costo de energía de este ataque.  No puede agregar más de 40 daños de esta manera.",
            it: "Fa 30 danni più 20 danni in più per ogni energia idrica attaccata a Omastar ma non è usato per pagare il costo energetico di questo attacco.  Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "Causam 30 danos mais 20 mais danos a cada energia da água anexada ao OMASTAR, mas não costumava pagar pelo custo de energia desse ataque.  Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
