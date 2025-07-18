import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmontop",
         ja: "ヒットモントップ",
         fr: "Hitmontop",
         de: "Hitmontop",
         es: "Hitmontop",
         it: "Hitmontop",
         pt: "Hitmontop",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [237],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Stages of Evolution",
            ja: "進化の段階",
            fr: "Étapes de l'évolution",
            de: "Evolutionsphasen",
            es: "Etapas de evolución",
            it: "Fase dell'evoluzione",
            pt: "Estágios da evolução",
          },
          effect: {
            en: "As long as Hitmontop is an Evolved PokÃ©mon, is your Active PokÃ©mon, and is damaged by an opponent's attack (even if Hitmontop is Knocked Out), put 2 damage counters on the Attacking PokÃ©mon.",
            ja: "Hitmontopが進化したポカモンであり、アクティブなポケモンであり、対戦相手の攻撃によって損傷を受けている限り（Hitmontopがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを置きます。",
            fr: "Tant que Hitmontop est un pokã © mon évolué, est votre poké actif, et est endommagé par l'attaque d'un adversaire (même si Hitmontop est éliminé), mettez 2 compteurs de dégâts sur le poké attaquant.",
            de: "Solange Hitmontop ein weiterentwickelter Pokémon ist, ist Ihr aktiver Poké Mon und durch den Angriff eines Gegners (auch wenn Hitmontop ausgeschaltet wird) 2 Schadenszähler auf den angreifenden Poké Mon Mons.",
            es: "Mientras HitMontop sea un Poké Mon evolucionado, es su Poké Mon activo y está dañado por el ataque de un oponente (incluso si HitMonTop es noqueado), ponga 2 contadores de daño en el Poké Mon atacante.",
            it: "Finché HitMontop è un poké evoluto, è il tuo poké attivo, ed è danneggiato dall'attacco di un avversario (anche se HitMontop viene eliminato), metti 2 contatori di danno sul pokã © attaccante.",
            pt: "Enquanto o Hitmontop for um Poké -Mon evoluído, é o seu Poké Mon ativo e é danificado pelo ataque de um oponente (mesmo que o Hitmontop seja nocauteado), coloque 2 contadores de danos no Poké de ataque.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Upward Kick",
            ja: "上向きキック",
            fr: "Coup de pied vers le haut",
            de: "Aufwärtskick",
            es: "Patada ascendente",
            it: "Calcio verso l'alto",
            pt: "Kick para cima",
          },
          effect: {
            en: "If the Defending Pokemon already has at least 2 damage counters on it, this attack does 20 damage plus 30 more damage.",
            ja: "防御するポケモンに少なくとも2つのダメージカウンターがすでにある場合、この攻撃は20のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà au moins 2 compteurs de dégâts, cette attaque fait 20 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon bereits mindestens 2 Schadenszähler hat, verursacht dieser Angriff 20 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor ya tiene al menos 2 contadores de daño, este ataque hace 20 daños más 30 más de daño.",
            it: "Se il Pokemon in carica ha già almeno 2 contatori di danno, questo attacco fa 20 danni più 30 danni.",
            pt: "Se o Pokémon atual já tiver pelo menos 2 contadores de danos, esse ataque causará 20 danos mais 30 danos.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Spiral Kick",
            ja: "スパイラルキック",
            fr: "Coup de pied en spirale",
            de: "Spiralkick",
            es: "Patada espiral",
            it: "Calcio a spirale",
            pt: "Chute em espiral",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
