import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Wigglytuff",
         ja: "ウィグリティフ",
         fr: "Wigglytuff",
         de: "Wigglytuff",
         es: "Wigglytuff",
         it: "Wigglytuff",
         pt: "Wigglytuff",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [40],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Fluffy Fur",
            ja: "ふわふわした毛皮",
            fr: "Fourrure moelleuse",
            de: "Flauschiges Fell",
            es: "Pelaje esponjoso",
            it: "Pelliccia soffice",
            pt: "Pêlo fofo",
          },
          effect: {
            en: "If Wigglytuff is your Active PokÃ©mon and is damaged by an opponent's attack (even if Wigglytuff is Knocked Out), the Attacking PokÃ©mon is now Asleep.",
            ja: "Wigglytuffがあなたのアクティブなポカモンであり、相手の攻撃によって損傷を受けている場合（Wigglytuffがノックアウトされたとしても）、攻撃するPokã©Monは今眠っています。",
            fr: "Si Wigglytuff est votre poké actif et est endommagé par l'attaque d'un adversaire (même si Wigglytuff est éliminé), le pokât attaquant est maintenant endormi.",
            de: "Wenn Wigglytuff Ihr aktiver Pokémon ist und durch den Angriff eines Gegners beschädigt wird (auch wenn Wigglytuff ausgeschaltet wird), schläft der angreifende Poké Mon Mon Mon.",
            es: "Si Wigglytuff es tu Poké Mon activo y está dañado por el ataque de un oponente (incluso si Wigglytuff es noqueado), el Poké Mon atacante ahora está dormido.",
            it: "Se WigglyTuff è il tuo Poké Mon attivo ed è danneggiato dall'attacco di un avversario (anche se WigglyTuff viene eliminato), il poké lunedì attaccante è ora addormentato.",
            pt: "Se o Wigglytuff é o seu Poké de Mon ativo e for danificado pelo ataque de um oponente (mesmo que Wigglytuff seja nocauteado), o Poké Mon atacante está agora dormindo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw 3 cards.",
            ja: "3枚のカードを描きます。",
            fr: "Dessinez 3 cartes.",
            de: "Zeichnen Sie 3 Karten.",
            es: "Dibuja 3 cartas.",
            it: "Disegna 3 carte.",
            pt: "Desenhe 3 cartas.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pester",
            ja: "ペスター",
            fr: "Harceler",
            de: "Belästigen",
            es: "Molestar",
            it: "Tormentare",
            pt: "Pester",
          },
          effect: {
            en: "If the Defending Pokemon is affected by a Special Condition, this attack does 30 damage plus 20 more damage.",
            ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は30のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense est affecté par une condition spéciale, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon von einem besonderen Zustand betroffen ist, verursacht dieser Angriff 30 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor se ve afectado por una condición especial, este ataque hace 30 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è influenzato da una condizione speciale, questo attacco infligge 30 danni più 20 danni.",
            pt: "Se o pokemon atual for afetado por uma condição especial, esse ataque causará 30 danos mais 20 danos.",
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
